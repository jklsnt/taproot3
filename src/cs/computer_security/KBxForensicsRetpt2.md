---
title:   Forensics, pt2.
context: compsec
author:  Huxley Marvit
date: 2021-11-17
---

#ret  #hw  #incomplete

***

# Forensics!
forensics. 

stegsolve, try at home.
tried janky implimentation of lsb, outputs nonsense.
```py
from PIL import Image
import base64
im = Image.open('./fc13_images_pkg1/IMG_0447.png')
pixels = list(im.getdata())
bs = ''

def bits2a(b):
    # return ''.join(chr(int(''.join(x), 2)) for x in zip(*[iter(b)]*8))
    return str(base64.b16decode(hex(int(b, base=2))[2:],casefold=True))[2:-1]


for i in pixels:
    for j in i[:3]:
        bs += bin(j)[-1]

print(bits2a(bs))

```

perhaps look at solutions, or look for help from other people.
#review



***

stegsolve! bit planes!

seperating out the bit planes to bit plane zero for each color gives us something fishy.

as we decrease the bit planes, the image gets less legible. makes sense, because the significance of the bit is decreasing.
now we just gotta find the hidden message.



size of image:

480 x 343

we can seperate it out, the message starts at the 191th pixel on the image
multiplying this by our width we get 91680, the pixel where the encoded message starts.

# Forensics! :: pt. 2.

```ad-note
By working on this, for many hours, I have learned that forensics is hard. When it comes to forensics, I have absolutely no idea what I am doing. What follows is my process for trying to get things done with absolutely no background.
```

## The Problem
I chose to solve [this problem](https://www.honeynet.org/challenges/forensic-challenge-13-a-message-in-a-picture/) from the Honeynet Project essentially at random. Next time, I think I will put more effort into choosing a problem.

Along with a `.zip` file containing three packs of images, this is all the information we get about the problem.

```ad-abstract
title: Problem Information
Communication using hidden channels ==(steganography)== is one way to protect that communication from third parties. You are a law enforcement agent in the forensics unit. In a recent raid, the agency has been able to obtain the ==three attached packages of images== from a suspected command and control server. These images could ==potentially== contain hidden messages that will be relayed to a powerful botnet army that could destroy earth. Obviously a high priority item! While your colleagues try to reverse the botnet code, you are tasked with analyzing the images directly and ==extract the hidden messages.==

When analyzing these images, develop tools that take advantage of the full spectrum of steganalysis – statistical methods, visual attacks, machine learning, visualization – and make them available as open-source so your colleagues can take advantage of your work without needing to reinvent the wheel.

Note that we received a tip from a mole that ==none of the images utilize encryption== in addition to steganography. Lucky us. Lets get to it!
```

### Fumbling
Looking at the images with the naked eye, all I saw were dogs.

![[IMG_0549.png||500]]
While I am not opposed to dogs, I was not satisfied with this. However, I had no idea where to go, where to look, or even if any given image I was working with was one with a hidden message.

After fumbling for many hours, I ended up plugging the images into [stegsolve](https://github.com/zardus/ctf-tools/tree/master/stegsolve). After lots of clicking around, and getting images like this:
![[Pasted image 20211123222525.png||500]]
 I finally found a lead.

### A Lead

`IMG_0406` from pack 1, 

![[IMG_0406.png||500]]

had something fishy going on.

While all the `Plane x` settings in stegsolve roughly resembled the original image, switching to `Plane 0` of 7 revealed something different.

![[Pasted image 20211123223313.png||500]] 
*Plane 1*
![[Pasted image 20211123223412.png||500]]
*Plane 0*

A rectangle of noise appeared in the white space under the dogs ears. Having no idea what I was doing, I set out to figure out what this could mean.

Comparing the different planes, I noticed that the images got more noisy as the plane number decreased.
![[Pasted image 20211123223946.png||100]] ![[Pasted image 20211123224007.png||100]] ![[Pasted image 20211123224019.png||100]] ![[Pasted image 20211123224028.png||100]] ![[Pasted image 20211123224042.png||100]] ![[Pasted image 20211123224052.png||100]] ![[Pasted image 20211123224059.png||100]] ![[Pasted image 20211123224107.png||100]]
*Planes 7-0*
I also noticed that they were 8 planes that stegsolve displayed regardless of the image, making me think that it was something related to bytes.

After doing more research, I figured out that what stegsolve was showing me were the binary values of a single bit from each byte encoding one of the colors at a given pixel -- looping from most significant to least significant, explaining why the fidelity of the image decreased with the plane number. Knowing that the hidden message seemed to be encoded in plane 0 -- the least significant bit -- I stumbled upon a method called LSB steganography.

### LSB

Each pixel in a `.png` has to store a value for every color channel, RGBA. LSB works by changing the 8th bit of each of these values, allowing a message to be encoded in the image with minimal effect on how the image looks. Only when isolating the least significant bit can we see the impact of this method.

Armed with my new knowledge after reading [many articles](https://medium.com/swlh/lsb-image-steganography-using-python-2bbbee2c69a2), I began trying to decode the image with this method.


```py
def lsb(src):
    img = Image.open(src, 'r') # get the image
    d = np.array(list(img.getdata())) # get the data
    px = (d.size // 4) # get the px count, as the total size of our data array over 4 for RBGA

    bits = "" # our bit array
    for i in range(px): # loop through our pixels
        for j in range(0, 3): # and loop through our color channels
            bits += (bin(d[i][j])[2:][-1]) # and extract the bits
			
    bits = [bits[i:i+8] for i in range(0, len(bits), 8)] # convert our string into an array
	
    enc = "" # our encoded string (hopefully)
    for i in range(len(bits)): # loop through our bits
        enc += chr(int(bits[i], 2)) # and convert to UTF-8
		
	with open('out.txt', 'w') as f: # write our data to a file
        with redirect_stdout(f):
            print(enc)


src = "./fc13_images_pkg1/IMG_0406.png" # define our path
lsb(src) # and call the function.
```
Running this code outputted, *drumroll please*: 
```bash
❯ vim out.txt
*Pr&"VâWßU6¾7$Ç64ÿ5ÂÇtNº°,¦jî§BõS8î¯ÅI)HêLNõú©ÿ®¶h¢Ë­G ¨ÞK6åþ\0¿R:ª
ý4·Ð«>bgIÙ_®TÄøtÅÇtaLÌ×wG®ÏUé¥³ZbvóíkóTprv3Fg#r_²HÿéI]Î±âZÑq^íÍqïÂÙ\...
```
gibberish. Absolute gibberish. The same was true for many, many, similar iterations of the code. After quite a bit of messing about, I realized that the message wasn't necessarily encoded in text. The next obvious format was a `.png`.

```ad-comment
title: Many more iterations were spent trying to convert the output to a png...
```py
bits = [bits[i:i+8] for i in range(0, len(bits), 8)]
out = ""
for i in range(len(bits)):
    out += chr(int(bits[i], 2))

with open('out.png', 'w') as f:
    with redirect_stdout(f):
        print(out)

bits = [[int(y) for y in x] for x in bits]

out_bits = np.array(bits)
out_bytes = np.packbits(out_bits)

imageStream = io.BytesIO(out_bytes)

im = Image.fromarray(np.array(out_bytes).astype("uint16"))
im.save("out.png")

png.from_array(out_bits, 'L').save('out.png')

imageFile = Image.open(out_bytes)
out_img = Image.fromarray(out_bytes)
out_img.save("out.png")
out_bytes.tofile("out.png")
```

These attempts were met with 
```bash
❯ feh bitsout.png
feh WARNING: bitsout.png - Does not look like an image (magic bytes missing)
feh: No loadable images specified.
See 'feh --help' or 'man feh' for detailed usage information
```
or simply a malformed image, which had some cool properties. Namely, an entirely non-interactive chunk of space in Discord when sent.
![[Pasted image 20211123234017.png||300]] ![[Pasted image 20211123234127.png||300]] ![[Pasted image 20211123234142.png||300]]
I also tried simply converting the output to values between 0-255, then graphing the values based on their original y location. I also learned about then messed with adding in the magic bytes that feh said was missing manually. Neither of these methods worked at all. After talking with @david on a walk today, I realized that the bits outputted from our LSB decryption, if they were a `.png`, would most likely have all the information of the `.png` included, magic bytes and all. With this knowledge in mind, any many hours with no hidden message to show for, I went back to the drawing board.

### New Revelations

Poking around back through stegsolve, I noticed something new.
Following are the zero'th plane of each of the color channels.
![[Pasted image 20211123235055.png||200]] ![[Pasted image 20211123235105.png||200]] ![[Pasted image 20211123235118.png||200]] ![[Pasted image 20211123235136.png||200]]
*Plane 0 from stegsolve of the red, green, blue, and alpha channels.*
If you look closely at the third image -- the blue plane -- there is a little white spot under the right ear and the new block.
![[Pasted image 20211123235431.png]]
With this discovery, I realized that not all the image nessasarily had a message encoded. Instead, only a segment could have an encoded message.




