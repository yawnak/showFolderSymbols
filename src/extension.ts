import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "invoicesSync" is now active!');

	const disposable = vscode.commands.registerCommand('folderSymbols.show', () => {
		// Get the active text editor
		const activeEditor = vscode.window.activeTextEditor;
		
		if (activeEditor) {
			// Get the current file path
			const currentFilePath = activeEditor.document.uri.fsPath;
			
			// Get the parent folder of the current file
			const parentFolder = path.basename(path.dirname(currentFilePath));
			
			// Execute the quickOpen command with the parent folder name as the argument
			vscode.commands.executeCommand('workbench.action.quickOpen', `#${parentFolder}`);
		} else {
			// If no file is currently open, show a warning message
			vscode.window.showWarningMessage('No file is currently open.');
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
