import React, { ChangeEvent } from "react";
import { useDebounce } from "./useDebounce";

function validRules(rules: IInputRules, value: string) {
  for (const rule in rules) {
    const _rule = rule as keyof IInputRules;
    let str = "qwertyuiopasdfghjklzxcvbnm1234567890".split("");

    switch (_rule) {
      case "maxWidth":
        if (value.length > Number(rules[_rule]))
          return "Поле не должно содержать более " + rules[_rule] + " символов";
        break;
      case "minWidth":
        if (value.length < Number(rules[_rule]))
          return "Поле не должно быть менее " + rules[_rule] + " символов";
        break;
      case "isEmail":
        // eslint-disable-next-line no-case-declarations
        const regex = String(value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        if (!regex) return "Некорректный email!";
        break;
      case "noSpacing":
        if (value.split("").includes(" "))
          return "Поле не должно содержать пробелы";
        break;
      case "specialChars":
        if (!rules["specialChars"]) return "Ошибка!";
        let chars2 = rules["specialChars"];
        let chars = chars2.split("");
        let value_crs = value.toLowerCase().split("");
        for (let src_char of value_crs) {
          if (![...chars, ...str].includes(src_char))
            return `Поле должно содержать только латиницу и символ "${chars}"`;
        }
        break;
      case "match":
        if (!rules["match"]) return "Ошибка!";
        let matchValue = rules["match"];
        if (value !== matchValue) return "Значения не совпадают";
    }
  }
  return null;
}

export interface IInputRules {
  maxWidth?: number;
  minWidth?: number;
  isEmail?: boolean;
  noSpacing?: boolean;
  specialChars?: string;
  onlyEnglish?: boolean;
  match?: string;
  debounceTimeout?: number;
  withDebounce?: boolean;
}

export const useInput = (defValue: string, rules: IInputRules) => {
  const [value, setValue] = React.useState(defValue);
  const [isShowError, setIsShowError] = React.useState(false);
  const [errorText, setErrorText] = React.useState("Ошибка!");
  const [isValid, setIsValid] = React.useState(false);
  const debounce = useDebounce();
  const error = isValid ? false : isShowError;

  React.useEffect(() => {
    isValidCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isValidCheck() {
    const e = {
      target: {
        value: defValue,
      },
    } as ChangeEvent<HTMLInputElement>;
    onChange(e);
  }

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(e.target.value);
    if (rules.withDebounce) {
      debounce(
        () => {
          const errorText = validRules(rules, e.target.value);
          if (errorText) {
            setErrorText(errorText);
            setIsValid(false);
          } else {
            setIsValid(true);
          }
        },
        rules.debounceTimeout ? rules.debounceTimeout : 300
      );
    } else {
      const errorText = validRules(rules, e.target.value);
      if (errorText) {
        setErrorText(errorText);
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }
  }

  React.useEffect(() => {
    const _e = {
      target: { value: value },
    } as ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

    onChange(_e);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rules.match]);
  function onFocus() {
    setIsShowError(false);
  }
  function onBlur() {
    setIsShowError(true);
  }
  function showError() {
    setIsShowError(true);
  }
  function clear(value?: string) {
    defValue = value ? value : defValue;
    setValue(value ? value : "");
    setIsShowError(false);
    setErrorText("Ошибка!");
    isValidCheck();
  }

  return {
    value,
    handlers: { onChange, onFocus, onBlur },
    isValid,
    isShowError: error,
    errorText: error ? errorText : "",
    clear,
    showError,
    setValue: function (value: string) {
      setValue(value);

      debounce(() => {
        const errorText = validRules(rules, value);
        if (errorText) {
          setErrorText(errorText);
          setIsValid(false);
        } else {
          setIsValid(true);
        }
      }, 300);
    },
  };
};
