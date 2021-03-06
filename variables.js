module.exports.variables = {
    /**
     * Путь к папке для сборки
     */
    DIST_PATH: './dist',

    /**
     * Папка для работы сервера
     */
    SERVER_FOLDER: 'dist',

    /**
     * Порт сервера
     */
    SERVER_PORT: 9000,

    /**
     * Имя JS файла
     */
    BUNDLE_JS_FILE_NAME: 'index.bundle.js',

    /**
     * Имя CSS файла
     */
    BUNDLE_CSS_FILE_NAME: '../../local/templates/irro-default/index.bundle.css',

    /**
     * Прокси для ajax
     * только для маршрутов API
     * Например http://localhost:8080
     */
    API_PROXY: 'http://localhost:8080',

    /**
     * Параметры HTML шаблона
     */
    HTML_TEMPLATE: {
        TEMPLATE: './src/index.ejs',
        PARAMETERS: {
            TITLE: 'Webpack App',
        }
    },

    HTML_TEMPLATES: [
        {
            TEMPLATE: './src/index.ejs',
            PARAMETERS: {
                TITLE: 'Home',
            }
        },
        {
            TEMPLATE: './src/views/pages.news.ejs',
            PARAMETERS: {
                TITLE: 'News',
            }
        }
    ]
};
