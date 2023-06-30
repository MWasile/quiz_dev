import {extendTheme} from 'native-base';

export const theme = extendTheme({
    colors: {
        primary: {
            0: '#000000',
            10: '#001452',
            20: '#0D2878',
            30: '#2A4190',
            40: '#4459A9',
            50: '#5D72C4',
            60: '#778CE0',
            70: '#92A7FD',
            80: '#B7C4FF',
            90: '#DDE1FF',
            95: '#EFEFFF',
            99: '#FEFBFF',
            100: '#FFFFFF',
        },
        secondary: {
            0: '#000000',
            10: '#001D25',
            20: '#001D25',
            30: '#00445A',
            40: '#005B7A',
            50: '#00769D',
            60: '#1391C2',
            70: '#3BAEE1',
            80: '#61CCFF',
            90: '#B7E6FF',
            95: '#DDF2FF',
            99: '#F9FCFF',
            100: '#FFFFFF'
        }
    },
    container: {
        primary: {
            light: {backgroundColor: 'primary.40'},
            dark: {backgroundColor: 'primary.80'}
        },
        onPrimary: {
            light: {backgroundColor: 'primary.100'},
            dark: {backgroundColor: 'primary.20'},
        },
        primaryContainer: {
            light: {backgroundColor: 'primary.90'},
            dark: {backgroundColor: 'primary.30'},
        },
        onPrimaryContainer: {
            light: {backgroundColor: 'primary.10'},
            dark: {backgroundColor: 'primary.90'},
        },
    },
    surface: {
        baseStyle: (props: any) => {
            return {
                _light: {backgroundColor: '#FFFCFF'},
                _dark: {backgroundColor: '#212025'}
            }
        }
    }
});
