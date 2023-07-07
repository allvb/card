import Card from "./components/Card";
function App() {

  const cards = [ 
    {
      img: 'https://yandex.ru/images/search?pos=0&from=tabbar&img_url=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2019%2F10%2F56256-usa-wyoming-grand-teton-national-park-mount-moran-lake-jackson-nature-summer-morning-forest-reflection-trees-shore-forest.jpg&text=картинка&rpt=simage&lr=213',
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      button: 'Go somewhere'
    }, 
    {
      title: 'Special title treatment',
      text: 'With suppoting text below as a natural lead-in to additional content',
      button: 'Go somewhere'
    }
  ];

  return (
    <div className="wrapper">
      {cards.map((item, index) => {
        const child = item.img 
          ? <img src={item.img} className="card-img-top" alt={item.title}/>
          : null
        return (
          <Card key={index} {...item}>
            {child}
          </Card>
        );
      })}

      {/* <Card {...card1}>
        <img src={card1.img} className="card-img-top" alt={card1.title}/>
      </Card>
      <Card {...card2} /> */}
      
    </div>
  );
}

export default App;
