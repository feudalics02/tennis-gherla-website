export default function Facilitati() {
    return (
        <div id="facilitati" className="h-[calc(100vh-250px)] pt-20 pb-16 px-4 md:px-8 bg-white overflow-hidden flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8 text-center">
                    Facilitățile Noastre
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4 text-gray-700">
                        <p>
                            Clubul nostru de tenis oferă o gamă completă de facilități pentru toți iubitorii de tenis:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>4 terenuri exterioare de tenis</li>
                            <li>2 terenuri interioare pentru sezonul rece</li>
                            <li>Vestiar modern cu dușuri</li>
                            <li>Zonă de relaxare cu terasă</li>
                            <li>Magazin de echipamente sportive</li>
                            <li>Parcare privată</li>
                        </ul>
                    </div>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            Serviciile noastre includ:
                        </p>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Antrenori profesioniști</li>
                            <li>Școală de tenis pentru copii și adulți</li>
                            <li>Închiriere echipament</li>
                            <li>Organizare turnee</li>
                            <li>Rezervări online</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
