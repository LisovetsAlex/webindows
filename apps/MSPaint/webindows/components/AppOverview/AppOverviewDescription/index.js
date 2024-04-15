export default function AppOverviewDescription(props) {
    return <p style={{ margin: "14px", minWidth: "150px", width: props.width ?? "100%" }}>{props.text}</p>;
}
