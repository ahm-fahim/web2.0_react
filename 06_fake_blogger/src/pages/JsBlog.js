import React from "react";
import MainLayout from "../layout/MainLayout";

const JsBlog = () => {
    return (
        <MainLayout>
            <div>
                <h1>Javascript</h1>
                <p style={{ letterSpacing: "1px", wordSpacing: "4px" }}>
                    <b style={{ fontSize: "30px" }}> JavaScript </b>{" "}
                    (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming
                    language that is one of the core technologies of the World
                    Wide Web, alongside HTML and CSS. As of 2022, 98% of
                    websites use JavaScript on the client side for webpage
                    behavior, often incorporating third-party libraries. All
                    major web browsers have a dedicated JavaScript engine to
                    execute the code on users' devices. JavaScript is a
                    high-level, often just-in-time compiled language that
                    conforms to the ECMAScript standard.[10] It has dynamic
                    typing, prototype-based object-orientation, and first-class
                    functions. It is multi-paradigm, supporting event-driven,
                    functional, and imperative programming styles. It has
                    application programming interfaces (APIs) for working with
                    text, dates, regular expressions, standard data structures,
                    and the Document Object Model (DOM). The ECMAScript standard
                    does not include any input/output (I/O), such as networking,
                    storage, or graphics facilities. In practice, the web
                    browser or other runtime system provides JavaScript APIs for
                    I/O. JavaScript engines were originally used only in web
                    browsers, but are now core components of some servers and a
                    variety of applications. The most popular runtime system for
                    this usage is Node.js. Although Java and JavaScript are
                    similar in name, syntax, and respective standard libraries,
                    the two languages are distinct and differ greatly in design.
                </p>
                <h2>Creation at Netscape</h2>
                <p style={{ letterSpacing: "1px", wordSpacing: "4px" }}>
                    <b style={{ fontSize: "30px" }}>T</b>he first popular web
                    browser with a graphical user interface, Mosaic, was
                    released in 1993. Accessible to non-technical people, it
                    played a prominent role in the rapid growth of the nascent
                    World Wide Web.[11] The lead developers of Mosaic then
                    founded the Netscape corporation, which released a more
                    polished browser, Netscape Navigator, in 1994. This quickly
                    became the most-used.[12][13] During these formative years
                    of the Web, web pages could only be static, lacking the
                    capability for dynamic behavior after the page was loaded in
                    the browser. There was a desire in the flourishing web
                    development scene to remove this limitation, so in 1995,
                    Netscape decided to add a scripting language to Navigator.
                    They pursued two routes to achieve this: collaborating with
                    Sun Microsystems to embed the Java programming language,
                    while also hiring Brendan Eich to embed the Scheme
                    language.[6] Netscape management soon decided that the best
                    option was for Eich to devise a new language, with syntax
                    similar to Java and less like Scheme or other extant
                    scripting languages.[5][6] Although the new language and its
                    interpreter implementation were called LiveScript when first
                    shipped as part of a Navigator beta in September 1995, the
                    name was changed to JavaScript for the official release in
                    December.[6][1][14] The choice of the JavaScript name has
                    caused confusion, implying that it is directly related to
                    Java. At the time, the dot-com boom had begun and Java was
                    the hot new language, so Eich considered the JavaScript name
                    a marketing ploy by Netscape.[15]
                </p>
            </div>
        </MainLayout>
    );
};

export default JsBlog;
