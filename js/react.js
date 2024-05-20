// получаем корневой элемент
const rootNode = document.getElementById("App"); 
// рендеринг в корневой элемент 
const root = ReactDOM.createRoot(rootNode);

// элемент, который мы хотим создать 
root.render( <h1 className="mainScoreBoardIconPonyStyle headerLinkIconAccountStyle mainStyle buttonClass">Good React</h1> );