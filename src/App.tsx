import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { OrderContext, CoffeeWithQuantity } from './context/OrderContext'
import { useState } from 'react'
import { OrderData, OrderDataContext } from './context/OrderDataContext'

export function App() {
  const [activeOrder, setActiveOrder] = useState<CoffeeWithQuantity[]>([])
  
  const [finishedOrder, setFinishedOrder] = useState<OrderData | null>(null)

  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderDataContext.Provider value={{ finishedOrder, setFinishedOrder }}>
      <OrderContext.Provider value={{ activeOrder, setActiveOrder }}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
      </OrderContext.Provider>
      </OrderDataContext.Provider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
