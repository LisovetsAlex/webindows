import "./index.css";
import AppOverviewList from "./AppOverviewList";
import AppOverviewImage from "./AppOverviewImage";
import AppOverviewDescription from "./AppOverviewDescription";
import AppOverviewLink from "./AppOverviewList/AppOverviewLink";

function AppOverview(props, ...children) {
    return <div className="AppOverview">{children}</div>;
}

export { AppOverviewList, AppOverviewImage, AppOverviewDescription, AppOverview, AppOverviewLink };
