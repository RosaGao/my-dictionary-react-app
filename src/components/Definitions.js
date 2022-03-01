function Definitions() {
    const definitions = [
        {
            header: "exclamation",
            content: [
                {
                    explanation: "Used as a greeting or to begin a phone conversation.",
                    example: "Hello there, Katie!"
                }
            ]
        },
        {
            header: "noun",
            content: [
                {
                    explanation: "An utterance of “hello”; a greeting.",
                    example: "she was getting polite nods and hellos from people",
                    synonyms:[
                        "greeting",
                        "welcome",
                        "salutation",
                        "saluting",
                        "hailing",
                        "address",
                        "hello",
                        "hallo",
                    ]
                }
            ]

        },
        {
            header: "intransitive verb",
            content: [
                {
                  explanation: "Say or shout “hello”; greet someone.",
                  example: "I pressed the phone button and helloed",
                }
            ]
        }
    ];



    return (
        <section class="section is-medium pt-0 pb-6" id="definitions">
            <h1 class="title">Definitions</h1>
            {
                definitions.map((definition, index) => {
                    return (
                        <article className="message is-info is-medium" key={index}>
                            <div className="message-header">
                            <p>{definition.header}</p>
                            </div>
                            <div className="message-body">
                                <div className="content">
                                    <ul style={{marginTop: 0}}>
                                        {
                                            definition.content.map((item, i)=>{
                                                return (
                                                    <>
                                                        <li key={i}>{item.explanation}</li>
                                                    </>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </article>
                    );
                })
            }
        </section>
    );
}
  
export default Definitions;