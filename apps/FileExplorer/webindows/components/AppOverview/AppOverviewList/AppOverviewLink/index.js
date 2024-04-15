import Link from "@webindows/components/common/Link";

export default function AppOverviewLink(props) {
    return (
        <li className="AppOverview__SeeAlsoListItem" onClick={props.onClick}>
            <Link href={props.to} text={props.text} onClick={props.onClick} />
        </li>
    );
}
