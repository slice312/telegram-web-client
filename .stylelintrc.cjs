module.exports = {
    plugins: [
    ],
    ignoreFiles: [
        "node_modules/*",
        "src/assets/**",
        "build/**",
        "dist/**"
    ],
    rules: {
        "indentation": 4, // отступы, вложеноость
        "max-empty-lines": 3, // максимальное кол-во пустых строк
        "no-duplicate-at-import-rules": true,
        "no-invalid-position-at-import-rule": true,

        // пустая строка перед селектором
        "rule-empty-line-before": [
            "always", {
                except: ["first-nested"],
                ignore: ["after-comment"]
            },
        ],

        // паттерн для наименования класса селектора (специально для React css модулей)
        "selector-class-pattern":  "^[a-z][a-zA-Z0-9]+$",


        /* Блок */
        // нельзя оставлять пустые селекторы, нужно хотя-бы комментарий внутри оставить
        "block-no-empty": true,
        // пробел перед открывающей скобкой блока
        "block-opening-brace-space-before": "always",
        // пробел перед закрывающей скобкой блока
        "block-closing-brace-empty-line-before": "never",


        "function-comma-space-after": "always", // пробелы в аргументах
        "value-list-comma-space-after": "always", // пробелы в списках значений свойств
        "declaration-bang-space-before": "always", // пробел перед !important

        "selector-list-comma-space-after": "always", // пробелы в селекторах после запятых
        "selector-list-comma-space-before": "never",

        "media-feature-colon-space-after": "always", // пробелы в условии медиа запроса
        "media-feature-colon-space-before": "never",


        // пробелы в определениях свойств
        "declaration-colon-space-before": "never",
        "declaration-colon-space-after": "always",


        // recommended rules
        "at-rule-no-unknown": null,
    }
};