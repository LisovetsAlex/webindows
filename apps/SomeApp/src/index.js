import WindowContent from "@webindows/components/WindowContent";
import { ViewContainer, addView } from "@webindows/Views";
import WebindowsAppOverview from "./AppViews/WebindowsAppOverview";
import NavigationBar from "./AppViews/NavigationBar";
import MainAppView from "./AppViews/MainAppView";
import AnotherView from "./AppViews/AnotherView";

function init() {
    const root = document.getElementsByTagName("body")[0];

    root.append(
        <WindowContent>
            <NavigationBar />
            <ViewContainer />
        </WindowContent>
    );

    addView("25%", <WebindowsAppOverview />, false);
    addView("75%", <MainAppView />, false);
}

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    addView("25%", <AnotherView />);
});

init();
