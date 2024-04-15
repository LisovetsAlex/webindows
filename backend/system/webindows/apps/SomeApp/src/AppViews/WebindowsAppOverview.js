import {
    AppOverview,
    AppOverviewLink,
    AppOverviewList,
    AppOverviewDescription,
    AppOverviewImage,
} from "@webindows/AppOverview";
import { ASSETS_PATH } from "@webindows/connect/constants";
import InfoBox from "@webindows/components/common/InfoBox";

export default function WebindowsAppOverview() {
    return (
        <AppOverview>
            <AppOverviewImage src={`${ASSETS_PATH}/WebindowsApp.png`} />
            <AppOverviewDescription text="This is a template for a Webindows app." />
            <InfoBox
                text="Click with RMB to create extra views!"
                width="250px"
            />
            <AppOverviewList text="You can do:">
                <AppOverviewLink text="this" />
                <AppOverviewLink text="that" />
                <AppOverviewLink text="everything" />
            </AppOverviewList>
        </AppOverview>
    );
}
