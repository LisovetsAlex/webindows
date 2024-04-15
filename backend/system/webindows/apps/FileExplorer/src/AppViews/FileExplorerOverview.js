import {
    AppOverview,
    AppOverviewLink,
    AppOverviewList,
    AppOverviewDescription,
    AppOverviewImage,
} from "@webindows/AppOverview";
import { ASSETS_PATH } from "@webindows/connect/constants";
import InfoBox from "../../webindows/components/common/InfoBox";

export default function FileExplorerOverview() {
    return (
        <AppOverview>
            <AppOverviewImage src={`${ASSETS_PATH}/FileExplorer.png`} />
            <AppOverviewDescription text="Select an item to view its description." />
            <InfoBox text="Not fully functional." width="250px" />
            <AppOverviewList text="See also:">
                <AppOverviewLink text="Public" />
                <AppOverviewLink text="Assets" />
                <AppOverviewLink text="Icons" />
            </AppOverviewList>
        </AppOverview>
    );
}
