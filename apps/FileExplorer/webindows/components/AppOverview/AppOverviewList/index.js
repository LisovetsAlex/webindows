export default function AppOverviewList(props, ...children) {
    return (
        <div className="AppOverview__SeeAlso">
            <p style={{ width: "150px" }}>{props.text}</p>
            <ul className="AppOverview__SeeAlsoList">{children}</ul>
        </div>
    );
}
