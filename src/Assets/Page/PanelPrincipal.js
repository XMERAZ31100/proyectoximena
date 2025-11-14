import Components from "../Components/Card/card";

export default function PanelPrincipal() {
  const cards = [
    { id: 1, title: "Card 1", description: "Descripción de la tarjeta 1" },
    { id: 2, title: "Card 2", description: "Descripción de la tarjeta 2" },
    { id: 3, title: "Card 3", description: "Descripción de la tarjeta 3" },
    { id: 4, title: "Card 4", description: "Descripción de la tarjeta 4" },
  ];
 
  

    
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Panel Principal</h1>
        <p>Bienvenido al área de inicio del sistema.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Components key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
      <div className="grid grid-cols-12 grid-rows-12 gap-4">
    <div className="col-span-3"></div>
    <div className="col-span-3 col-start-4">2</div>
    <div className="col-span-3 col-start-7">3</div>
    <div className="col-span-3 col-start-10">4</div>
    <div className="col-span-9 row-span-3 row-start-2">5</div>
    <div className="col-span-9 row-span-3 col-start-1 row-start-5">6</div>
    <div className="col-span-3 row-span-6 col-start-10 row-start-2">7</div>
</div>
    </div>
    
  );
}