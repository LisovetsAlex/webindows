export default function ButtonBar(props, ...children) {
    return (
        <div className="ButtonBar" style={{ gap: props?.gap ?? "4px" }}>
            <div className="winCl-DividerBigVertical" style="height: 22px; margin-block: 2px"></div>
            {children}
        </div>
    );
}
