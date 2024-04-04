//import { sys } from "./src/webindows/System";
import Test from "./src/webindows/test.jsx";
import { createElement, createFragment } from "./src/jsx.js";

const UsingFragment = () => (
    <div>
        <p>This is regular paragraph</p>
        <div>
            <p>This is a paragraph in a fragment</p>
            <>
                <p>Hello</p>
            </>
            <ul>
                {[1, 2, 3].map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    </div>
);

document.body.innerHTML = "";
document.getElementById("id_desktop").append(<Test />);

//sys.init();
