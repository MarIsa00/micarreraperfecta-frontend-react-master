

export default async function getQuestions(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            await fetch("http://localhost:8080/questions").then(async (data) => {
                if (data) {
                    const res = await data.json();
                    console.log(res);
                    resolve(res);
                }
            });
        } catch (e) {
            throw new Error(e);
        }
    });
}