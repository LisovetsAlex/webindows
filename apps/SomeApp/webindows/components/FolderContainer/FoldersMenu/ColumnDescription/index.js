export default function ColumnDescription(props) {
    return (
        <div className="winCl-ColumnDescription">
            <div className="winCl-ColumnDescriptionItem" style={{ width: "60%", minWidth: "200px" }}>
                Name
            </div>
            <div className="winCl-ColumnDescriptionItem" style={{ width: "5%", minWidth: "50px" }}>
                Type
            </div>
            <div className="winCl-ColumnDescriptionItem" style={{ width: "15%", minWidth: "100px" }}>
                Owner
            </div>
            <div className="winCl-ColumnDescriptionItem" style={{ width: "20%", minWidth: "150px" }}>
                Size
            </div>
        </div>
    );
}
