import {extendTheme} from 'native-base';
import Surface from '../components/Surface/Surface';

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                primary: (props: any) => ({
                    _light: {
                        bg: 'primary.40',
                        backgroundColor: 'primary.40',
                        rounded: 'full',
                        _pressed: {
                            bg: 'primary.60',
                            backgroundColor: 'primary.60',
                        },
                        _text: {
                            color: 'primary.90',
                        }
                    },
                    _dark: {
                        bg: 'primary.80',
                        backgroundColor: 'primary.80',
                        rounded: 'full',
                        _text: {
                            color: 'primary.20',
                        }
                    }
                }),
                secondary: (props: any) => ({
                    _light: {
                        bg: 'primary.80',
                        backgroundColor: 'primary.80',
                        rounded: 'full',
                        _text: {
                            color: 'secondary.20',
                        },
                        _pressed: {
                            bg: 'primary.70',
                            backgroundColor: 'primary.70',
                        },
                    },
                    _dark: {
                        bg: 'primary.40',
                        backgroundColor: 'primary.40',
                        rounded: 'full',
                        _text: {
                            color: 'secondary.20',
                        },
                        _pressed: {
                            bg: 'primary.50',
                            backgroundColor: 'primary.50',
                        }
                    }
                }),
            },
        },
        Input: {
            baseStyle: (props) => ({
                _light: {
                    backgroundColor: 'primary.90',
                    borderColor: 'primary.90',
                    rounded: '5',
                    color: 'primary.20',
                    placeholderTextColor: 'primary.60',
                    textAlign: 'center',
                    _focus: {
                        borderColor: 'primary.90',
                        color: 'primary.20',
                    },
                },
                _dark: {
                    backgroundColor: 'primary.80',
                    borderColor: 'primary.80',
                    rounded: '5',
                    color: 'primary.20',
                    placeholderTextColor: 'primary.60',
                    textAlign: 'center',
                    _focus: {
                        borderColor: 'primary.80',
                        color: 'primary.20',
                    },
                }
            }),
        }
    },
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
        },
        neutral: {
            0: '#000000',
            10: '#1C1B1F',
            20: '#313033',
            30: '#48464A',
            40: '#605D62',
            50: '#79767A',
            60: '#939094',
            70: '#ADAAAF',
            80: '#C9C5CA',
            90: '#E5E1E6',
            95: '#F4EFF4',
            99: '#FFFBFF',
            100: '#FFFFFF'
        },
        tertiary: {
            0: '#000000',
            10: '#261900',
            20: '#402D00',
            30: '#5D4200',
            40: '#7A5900',
            50: '#997000',
            60: '#BA8800',
            70: '#DBA100',
            80: '#FDBC11',
            90: '#FFDEA3',
            95: '#FFEFD6',
            99: '#FFFBFF',
            100: '#FFFFFF'
        }
    }
});
