export default function Test() {
    return (
        <div>
            <p>This is regular paragraph</p>
            <div>
                <p>This is a paragraph in a fragment</p>

                <p>Hello</p>
                <ul>
                    {[1, 2, 3].map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
