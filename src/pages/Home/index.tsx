import { Clock, Coffee, Package, ShoppingCartSimple } from 'phosphor-react'
import CoffeeImg from './assets/Coffee.png'
import { Advantages, Advantages_Section, AdvantagesIcon, BackgroundStyled, Content, Content_Text, Main, MainContent } from './styles'
import { CoffeeSectionStyle, ContainerCoffee } from './components/CoffeeCard/styles'
import { CoffeeCard } from './components/CoffeeCard/CoffeeCard'
import  {coffees}  from './assets/coffeeCatalog.json'

interface Coffee {
  name: string
  value: number
  description: string
  tags: string[]
  image: string
}

export function Home() {

  return(
    <>
    <Main>
      <BackgroundStyled />
      <MainContent>
        <Content>
          <Content_Text>
            <h1> Encontre o café perfeito <br/> para qualquer hora do dia</h1>
            <p> Com o Coffee Delivery você recebeu seu café onde estiver, a <br/> qualquer hora</p>
          </Content_Text>

          <Advantages_Section>
            <Advantages>
              <AdvantagesIcon $bgcolor={'yellow'}> <ShoppingCartSimple size={16} weight='fill'/> </AdvantagesIcon> <p>Compra simples e segura</p>
            </Advantages>

            <Advantages>
              <AdvantagesIcon $bgcolor={'brown'}> <Package size={16} weight='fill'/> </AdvantagesIcon> <p>Embalagem mantém o café intacto</p>
            </Advantages>

            <Advantages>
              <AdvantagesIcon $bgcolor={'orange'}> <Clock size={16} weight='fill'/> </AdvantagesIcon> <p>Entrega rápida e rastreada</p>
            </Advantages>

            <Advantages>
              <AdvantagesIcon $bgcolor={'purple'}> <Coffee size={16} weight='fill'/> </AdvantagesIcon> <p>O café chega fresquinho até você</p>
            </Advantages>
          </Advantages_Section>

        </Content>
        <img src={CoffeeImg} alt=""/>
      </MainContent>
    </Main>



    <CoffeeSectionStyle>
      <h1>Nossos cafés</h1>

      <ContainerCoffee>

      {coffees.map((coffee) => (
        <CoffeeCard coffee={coffee} key={coffee.name}/>
      ))}


      </ContainerCoffee>

    </CoffeeSectionStyle>

  </>
  )
}