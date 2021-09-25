---
title:   Lake Problem
context: 
author:  
source:  #index
---

#flo #ref #ret 
#disorganized #incomplete

---

# the lake problem
**150 word description of the mathematical technique you used to approximate the lake bed.**

After looking at quite a few bathymetries of real lakes, we realized that when the geometry of the lake's edge changed substantially, there would often be a raised ridge in the intersection. Each of these distinct regions would have a deep spot, then be surrounded either by the lake edge or a ridge. Our goal with our point placement was to locate these deep spots, then use our remaining points to locate the ridges and to see the change in slope at the same time. After receiving our points, we inputted them into the 3D modeling software Blender, and used a marching cubes algorithm to create a mesh which we then converted to a .stl and 3D printed. We also created a programmatic solution which involved looping through every point and taking the weighted average of the nearby known point's heights. We weighted exponentially based upon the distance of the source points to our target points, hoping to produce some nice curves.














