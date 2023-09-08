import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: Record<string, any>) => ({
    body: {
      bg: mode('#E9ECEB', '#1F1F1F')(props),
      color: mode('#1F1F1F', "#E9ECEB")(props)
    },
    nav: {
      bg: mode('#97AFA7', '#495e57')(props),
      color: mode('#333333', "#EDEFEE")(props),
      boxShadow: mode("0px 10px 5px #f4f6f5", "none")(props)
    },
    section: {
      bg: mode('#f4f6f5', '#333333')(props),
      color: mode('#333333', "#f4f6f5")(props),
      boxShadow: mode("0px 0px 10px #f4f6f5", "0px 0px 10px #333333")(props)
    },
    article: {
      bg: mode('#fff', '#525252')(props),
      color: mode('#525252', "#fff")(props),
      boxShadow: mode("0px 0px 10px #fff", "0px 0px 10px #525252")(props),
      border: mode("2px solid #97AFA7", "2px solid #495e57")(props)
    },
    p: {
      color: mode('#333333', "#EDEFEE")(props)
    },
    button: {
      bg: mode('#E9ECEB', '#1F1F1F')(props),
      color: mode('#1F1F1F', "##E9ECEB")(props)
    },
    footer: {
      bg: mode('#97AFA7', '#495e57')(props),
      color: mode('#333333', "#EDEFEE")(props)
    },
  }),
};

const components = {
  Button: {
    baseStyle: (props: Record<string, any>) => ({
      dialog: {
        borderRadius: '16px',
        bg: mode('#E9ECEB', '#1F1F1F')(props),
        color: mode('#1F1F1F', "##E9ECEB")(props)
      },
    }),
  },
  Drawer: {
    baseStyle: (props: Record<string, any>) => ({
      dialog: {
        bg: mode('#97AFA7', '#495e57')(props),
        color: mode('#333333', "#EDEFEE")(props),
      },
    }),
  },

};

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, components })

export default theme