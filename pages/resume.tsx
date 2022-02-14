import Bar from "../components/Bar";
import { languages } from "../data";

const Resume = () => {
    return (
        <div className="px-6 py-2">
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Information System</h5>
                        <p className="font-semibold">Cong Nghiep University (2017 - 2021)</p>
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold">Experience</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Kyanon Digital</h5>
                        <p className="font-semibold">Software Engineer Intern (2021)</p>
                        <p>Worked with Odoo, Python</p>
                    </div>

                    <div>
                        <h5 className="my-2 text-xl font-bold">Cybozu</h5>
                        <p className="font-semibold">Frontend Web Developer (09-2021 - On)</p>
                        <p>Kintone Plugins</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Langues and Framework</h5>
                    <div className="my-2">
                        {
                            languages.map(language => <Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools and Software</h5>
                    <div className="my-2">
                        {
                            languages.map(language => <Bar data={language} key={language.name} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;