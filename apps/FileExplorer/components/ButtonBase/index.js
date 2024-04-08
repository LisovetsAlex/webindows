export default function ButtonBase(props, ...children) {
    return (
        <div className="winCl-HardOutsetShadow winCl-BGColor">
            {children.map((child, index) => {
                return (
                    <div>
                        {child}
                        {index != children.length - 1 ? (
                            <div className="winCl-DividerHorizontal" style="width: 100%"></div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
