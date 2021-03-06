import { App, FileSystemAdapter, Notice, Plugin, PluginSettingTab, Setting, Workspace } from 'obsidian';
import ChatView from 'view';

interface MyPluginSettings {
	dualPath: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	dualPath: 'default'
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		await this.loadSettings();

		this.registerView('chat', (leaf) => {
			return new ChatView(leaf)
		});

		this.app.workspace.layoutReady && this.initLeaf(this.app.workspace)
		this.registerEvent(this.app.workspace.on('layout-ready', () => this.initLeaf(this.app.workspace)))

		this.addSettingTab(new SampleSettingTab(this.app, this));
	}

	initLeaf(workspace: Workspace): void {
		if (workspace.getLeavesOfType('chat').length == 0) {
			workspace.getRightLeaf(false).setViewState({
				type: 'chat'
			})
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.app = app;
		this.plugin = plugin;
	}

	display(): void {
		let {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h3', {text: 'Follow these instructions to set up your Dual:'});

		new Setting(containerEl)
		.setName('0. Install Python (3.8+).')
		.setDesc('Press the button to head over to the download page.')
		.addButton(cb => cb
			.setButtonText('Install Python')
			.setClass('mod-cta')
			.onClick(() => {
				window.open('https://www.python.org/downloads/')
			}));

		new Setting(containerEl)
			.setName('1. Copy snapshot.')
			.setDesc('Press the button to copy the entire vault as concatenated plain text.')
			.addButton(cb => cb
				.setButtonText('Copy snapshot')
				.setClass('mod-cta')
				.onClick(() => {
					new Notice('Loading files...');

					let concatenated = '';

					this.app.vault.getMarkdownFiles().forEach(element => {
						this.app.vault.cachedRead(element)
							.then((res) => {
								res = res
									.replace(/---\n*.*\n*---\n*/g, '')
									.replace(/\[\[[^\|\[\]]*\|([^\|\[\]]*)\]\]/g, '$1')
									.replace(/\[\[(.*)\]\]/g, '$1')
									.replace(/#.*\n/g, '');

								concatenated = concatenated.concat(res, '\n\n');
							});
					});

					let copyPromise = new Promise(resolve => setTimeout(resolve, 3000)).then(() => {
						this.copyStringToClipboard(concatenated);
						new Notice('Snapshot successfully copied to clipboard!');
					});
				}));

		new Setting(containerEl)
			.setName('2. Derive the essence.')
			.setDesc('After following the online instructions, extract \'essence.zip\' in \'.obsidian/plugins/Dual/\'.')
			.addButton(cb => cb
				.setButtonText('Start alignment')
				.setClass('mod-cta')
				.onClick(() => {
					window.open('https://colab.research.google.com/drive/1CObehan5gmYO-TvyyYq973a3h-_EYr9_?usp=sharing')
				}));

		new Setting(containerEl)
			.setName('3. Configure theskeleton.')
			.setDesc('Run \'python3 -m pip install -r requirements.txt\' in \'.obsidian/plugins/Dual/skeleton/\'.');

		new Setting(containerEl)
			.setName('4. Run the skeleton after you configured the essence.')
			.setDesc('Run \'python3 server.py --path /path/to/your/vault/\' in \'.obsidian/plugins/Dual/skeleton/\'.');

		new Setting(containerEl)
			.setName('5. Restart Obsidian.')
			.setDesc('Head over to the right side panel to talk with your Dual!');

		containerEl.createEl('h3', {text: 'Congratulations on setting up your Dual!'});
		
		new Setting(containerEl)
			.setName('Get involved!')
			.addButton(cb => cb
				.setButtonText('Report bugs')
				.setClass('mod-cta')
				.onClick(() => {
					window.open('https://github.com/Psionica/Dual/issues')
				}))
			.addButton(cb => cb
				.setButtonText('Join Psionica')
				.setClass('mod-cta')
				.onClick(() => {
					window.open('https://psionica.org/')
				}))
	}

	private copyStringToClipboard (content: string) {
		var el = document.createElement('textarea');
		el.value = content;
		el.setAttribute('readonly', '');
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	 }
}