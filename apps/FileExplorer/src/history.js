import { LinearHistory } from "@webindows/utils/history.js";
import { requestFiles, requestFolder } from "@webindows/connect/requests.js";
import { updateFoldersMenu } from "./AppViews/FoldersView.js";

const history = new LinearHistory("/");

async function goTo(address) {
    const input = document.getElementById("id_FileExplorer_Address");
    const newFolders = await requestFolder(address);
    const files = await requestFiles(address);

    history.addNew(address);
    input.value = address;

    updateFoldersMenu(newFolders, files);
}

async function goToHistory(index) {
    const input = document.getElementById("id_FileExplorer_Address");
    const location = history.goToIndex(index);
    const newFolders = await requestFolder(location);
    const files = await requestFiles(location);

    input.value = location;

    updateFoldersMenu(newFolders, files);
}

function goBack() {
    goToHistory(history.getPreviousIndex());
}

function goForward() {
    goToHistory(history.getNextIndex());
}

export { goTo, goBack, goForward, history };
