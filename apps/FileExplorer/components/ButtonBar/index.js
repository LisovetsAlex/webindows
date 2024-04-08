export default function ButtonBar(props, ...children) {
    return (
        <div className="winCl-ButtonBar" style={{ gap: props?.gap ?? "8px" }}>
            <div className="winCl-DividerBigVertical" style="height: 22px; margin-block: 2px"></div>
            {children}
        </div>
    );
}
