import React from "react";
import MainLayout from "../layout/MainLayout";

const PythonBlog = () => {
    return (
        <MainLayout>
            <h1>Python</h1>
            <p style={{ letterSpacing: "1px", wordSpacing: "4px" }}>
                <b style={{ fontSize: "30px" }}>Python</b> is a high-level,
                general-purpose programming language. Its design philosophy
                emphasizes code readability with the use of significant
                indentation.[32] Python is dynamically-typed and
                garbage-collected. It supports multiple programming paradigms,
                including structured (particularly procedural), object-oriented
                and functional programming. It is often described as a
                "batteries included" language due to its comprehensive standard
                library.[33][34] Guido van Rossum began working on Python in the
                late 1980s as a successor to the ABC programming language and
                first released it in 1991 as Python 0.9.0.[35] Python 2.0 was
                released in 2000 and introduced new features such as list
                comprehensions, cycle-detecting garbage collection, reference
                counting, and Unicode support. Python 3.0, released in 2008, was
                a major revision not completely backward-compatible with earlier
                versions. Python 2.7.18, released in 2020, was the last release
                of Python 2.[36] Python consistently ranks as one of the most
                popular programming languages.
            </p>
            <h1>History</h1>
            <p style={{ letterSpacing: "1px", wordSpacing: "4px" }}>
                <b style={{ fontSize: "30px" }}>T</b>he designer of Python,
                Guido van Rossum, at OSCON 2006 Main article: History of Python
                Python was conceived in the late 1980s[41] by Guido van Rossum
                at Centrum Wiskunde & Informatica (CWI) in the Netherlands as a
                successor to the ABC programming language, which was inspired by
                SETL,[42] capable of exception handling (from the start plus new
                capabilities in Python 3.11) and interfacing with the Amoeba
                operating system.[12] Its implementation began in December
                1989.[43] Van Rossum shouldered sole responsibility for the
                project, as the lead developer, until 12 July 2018, when he
                announced his "permanent vacation" from his responsibilities as
                Python's "benevolent dictator for life", a title the Python
                community bestowed upon him to reflect his long-term commitment
                as the project's chief decision-maker.[44] In January 2019,
                active Python core developers elected a five-member Steering
                Council to lead the project.[45][46] Python 2.0 was released on
                16 October 2000, with many major new features.[47] Python 3.0,
                released on 3 December 2008, with many of its major features
                backported to Python 2.6.x[48] and 2.7.x. Releases of Python 3
                include the 2to3 utility, which automates the translation of
                Python 2 code to Python 3.[49] Python 2.7's end-of-life was
                initially set for 2015, then postponed to 2020 out of concern
                that a large body of existing code could not easily be
                forward-ported to Python 3.[50][51] No further security patches
                or other improvements will be released for it.[52][53] Currently
                only 3.7 and later are supported. In 2021, Python 3.9.2 and
                3.8.8 were expedited[54] as all versions of Python (including
                2.7[55]) had security issues leading to possible remote code
                execution[56] and web cache poisoning.[57] In 2022, Python
                3.10.4 and 3.9.12 were expedited[58] and 3.8.13, and 3.7.13,
                because of many security issues.[59] When Python 3.9.13 was
                released in May 2022, it was announced that the 3.9 series
                (joining the older series 3.8 and 3.7) will only receive
                security fixes going forward.[60] On September 7, 2022, four new
                releases were made due to a potential denial-of-service attack:
                3.10.7, 3.9.14, 3.8.14, and 3.7.14.[61][62] As of November 2022,
                Python 3.11.0 is the current stable release and among the
                notable changes from 3.10 are that it is 10–60% faster and
                significantly improved error reporting.[63] Python 3.12 (alpha
                2) has improved error messages.
            </p>
        </MainLayout>
    );
};

export default PythonBlog;
