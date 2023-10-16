(() => {
    "use strict";
    let e,
        t = 0,
        n = 0,
        i = !1;
    function s(t) {
        !(function (t) {
            e = document.getElementById(t);
        })(t);
        let n = document.getElementsByClassName("winCl-BasicWindow");
        for (let e = 0; e < n.length; e++) n[e].style["z-index"] = 1;
        e.classList.contains("winCl-ShortcutBtn") || (e.style["z-index"] = 2),
            (i = !0);
    }
    function d() {
        (e = void 0), (i = !1);
    }
    const a = document.getElementById("id_desktop"),
        l = function (e) {
            const t = document.createElement("div"),
                n = document.createElement("button"),
                i = document.createElement("img");
            t.setAttribute("id", "id_shortcuts"),
                n.setAttribute("id", `${e.name}sc`),
                n.classList.add("winCl-ShortcutBtn"),
                n.classList.add("winCl-Grabber"),
                (n.dataset.width = "75"),
                n.addEventListener("dblclick", () => {
                    o(e);
                }),
                n.addEventListener("mousedown", () => {
                    s(`${e.name}sc`);
                }),
                i.setAttribute("src", `Assets/${e.img}`),
                i.setAttribute("loading", "lazy"),
                i.classList.add("winCl-ShortcutImg"),
                n.append(i),
                (n.innerHTML += e.name),
                t.append(n),
                a.append(t);
        },
        o = function (e) {
            let t = document.createElement("div");
            t.setAttribute("id", `${e.name}`),
                t.setAttribute("data-width", "350"),
                t.classList.add("winCl-BasicWindow"),
                (t.style.width = 363),
                (t.style.height = 235),
                t.append(r(e)),
                (t.style.position = "absolute"),
                (t.style.left = window.innerWidth / 2 - 100 + "px"),
                (t.style.top = window.innerHeight / 2 - 200 + "px"),
                a.prepend(t);
        },
        r = function (e) {
            const t = document.createElement("div"),
                n = document.createElement("button"),
                i = document.createElement("button"),
                a = document.createElement("button");
            return (
                t.classList.add("winCl-WindowHeader"),
                t.classList.add("winCl-Grabber"),
                t.addEventListener("mousedown", () => {
                    s(`${e.name}`);
                }),
                t.addEventListener("mouseup", () => {
                    d();
                }),
                n.classList.add("winCl-BtnHeader"),
                n.classList.add("winCl-CloseIcon"),
                n.addEventListener("mousedown", () => {}),
                i.classList.add("winCl-BtnHeader"),
                i.classList.add("winCl-ExpandIcon"),
                i.addEventListener("mousedown", () => {}),
                a.classList.add("winCl-BtnHeader"),
                a.classList.add("winCl-MinimizeIcon"),
                a.addEventListener("mousedown", () => {}),
                t.append(n),
                t.append(i),
                t.append(a),
                (t.innerHTML += e.name),
                c(e),
                t
            );
        },
        c = function (e) {
            const t = document.createElement("button"),
                n = document.getElementById("id_minnedApps");
            t.setAttribute("id", `${e.name}mini`),
                t.classList.add("winCl-MinimizedBtn"),
                t.addEventListener("click", () => {}),
                (t.innerHTML = `\n                <img src="Assets/${e.img}" style="width: 32px; height: 28px; padding-top: 0px;">\n                <p style="margin: 0px; margin-top: 8px;" >\n                    ${e.name}\n                </p>\n                `),
                n.prepend(t);
        };
    function m(e, t, n) {
        (this.name = e),
            (this.isFullScreen = !1),
            (this.isMinimized = !1),
            (this.html = t),
            (this.img = n);
    }
    !(function (e) {
        let t = document.getElementById("turnOff");
        (t.style.backgroundImage = "url('Assets/Img_LoadingWindows.PNG')"),
            (t.style.display = "block"),
            setTimeout(function () {
                t.style.display = "none";
            }, 100);
    })(),
        document
            .getElementById("id_windows")
            .addEventListener("mousemove", (s) => {
                var d;
                (d = s).clientX <= window.innerWidth &&
                    d.clientX >= 20 &&
                    (t = d.clientX),
                    d.clientY <= window.innerHeight - 100 &&
                        d.clientY >= 10 &&
                        (n = d.clientY),
                    i &&
                        ((e.style.position = "absolute"),
                        (e.style.left =
                            Number(t - Number(e.dataset.width) / 2) + "px"),
                        (e.style.top = n - 10 + "px"));
            }),
        setInterval(() => {
            !(function () {
                let e = new Date();
                document.getElementById("id_clockTaskBar").innerHTML =
                    String(e.getHours()) + ":" + String(e.getMinutes());
            })();
        }, 1e3),
        window.addEventListener("mouseup", (e) => {
            d();
        }),
        window.addEventListener("mouseout", function (e) {
            null == e.relatedTarget && d();
        }),
        (function () {
            const e = (function () {
                let e = new Array(0),
                    t = {};
                return (
                    (t = new m(
                        "Order Manager",
                        "Apps/App_OrderManagerHTML.html",
                        "ImgTrans_OrderManager.png"
                    )),
                    e.push(t),
                    (t = new m(
                        "Callback Sorter",
                        "Apps/App_CallbackSorterHTML.html",
                        "Img_Program.PNG"
                    )),
                    e.push(t),
                    e
                );
            })();
            for (let t = 0; t < e.length; t++) l(e[t]);
        })();
})();
