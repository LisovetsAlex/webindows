import {
    AppOverview,
    AppOverviewLink,
    AppOverviewList,
    AppOverviewDescription,
    AppOverviewImage,
} from "@webindows/AppOverview";
import { ASSETS_PATH } from "@webindows/connect/constants";
import InfoBox from "@webindows/components/common/InfoBox";
import Button from "@webindows/components/common/Button";
import { addView } from "@webindows/Views";
import MainAppView from "./MainAppView";

export default function WebindowsAppOverview() {
    return (
        <AppOverview>
            <AppOverviewImage src={`${ASSETS_PATH}/MSPaint.png`} />
            <AppOverviewDescription
                width="250px"
                text="Fake MS Paint. Should actually not be called MS Paint and just Paint."
            />
            <InfoBox text="Please, draw only appropriate images!" width="250px" />
            <Button
                text="NEW"
                onClick={() => {
                    addView("75%", <MainAppView />);
                }}
            />
        </AppOverview>
    );
}
