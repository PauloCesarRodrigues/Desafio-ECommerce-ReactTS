import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { OrderContext, CoffeeWithQuantity } from './context/OrderContext'
import { useState } from 'react'


export function App() {
  
  const [activeOrder, setActiveOrder] = useState<CoffeeWithQuantity[]>([]);

  return (
      <ThemeProvider theme={defaultTheme}>
        
        <OrderContext.Provider value={{activeOrder, setActiveOrder}}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </OrderContext.Provider>

        <GlobalStyle/>
      </ThemeProvider>
  )
}

