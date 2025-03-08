export default function Facilities() {
    return (
        <div id="facilitati"
             className="min-h-[calc(100vh-250px)] pt-28 pb-10 px-4 md:px-8 bg-white flex items-center justify-center">
            <div className="max-w-2xl mx-auto w-full text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 animate-fade-in-up">
                    Facilitățile Noastre
                </h2>
                <div className="space-y-4 text-gray-700 mx-auto text-left animate-fade-in-up delay-100">
                    <p>
                        Clubul nostru de tenis îți pune la dispoziție tot ce ai nevoie pentru a te bucura de acest
                        sport, indiferent de nivelul tău de experiență.
                    </p>
                    <h3 className="font-semibold mt-6 mb-2">Facilități:</h3>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>2 terenuri exterioare de <b>zgură</b></li>
                        <li>1 teren acoperit de <b>hard</b></li>
                        <li>Vestiar</li>
                        <li>Zonă de relaxare cu terasă</li>
                    </ul>
                    <h3 className="font-semibold mt-6 mb-2">Servicii:</h3>
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        <li>Cursuri de tenis pentru copii și adulți</li>
                        <li>Organizare de turnee</li>
                        <li>Racordare rachete</li>
                        <li>Închirierea echipamentului (inclusă în prețul terenului)</li>
                    </ul>
                    <div className="mt-32 text-center animate-fade-in-up delay-200">
                        <p className="text-xl mt-12 font-semibold text-primary animate-pulse">
                            Te așteptăm pe teren! 🎾
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
