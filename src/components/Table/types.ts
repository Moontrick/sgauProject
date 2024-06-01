import React, {CSSProperties} from 'react';

export type RowChanges = Partial<{[k: string]: {[k: string]: unknown}}>;


export type RowID = string | number;

/**
 * Свойства таблицы.
 */
export interface TableProps<R> {
  tableRef?: any;
  /**
   * Массив рядов.
   */
  rows: R[];
  /**
   * Массив колонок для рядов.
   */
  columns: TableColumn<R>[];
  /**
   * Функция, вызываемая при клике на кнопке, принимает ряд и колонку с кнопкой, на которых был осуществлен клик.
   */
  onButtonClick?: (row: R, column: TableColumn<R>) => void;
  /**
   * Функция, вызываемая при изменении содержимого инпута в колонке, принимает ряд и колонку с инпутом, в которых произошло изменение.
   */
  onInputChange?: (row: R, column: TableColumn<R>, value: string) => void;
  /**
   * Функция, вызываемая при изменении состояния чекбокса в колонке, принимает ряд и колонку с чекбоксом, в которых произошло изменение.
   */
  onCheckboxChange?: (row: R, column: TableColumn<R>, value: boolean) => void;
  /**
   * Пропсы react-perfect-scrollbar
   */
  scrollbarProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  /**
   * Зафиксированные колонки слева/справа.
   */
  fixedColumns?: {
    left?: string[];
    right?: string[];
  };
  /**
   * Состояние выбора рядов таблицы.
   */
  rowsSelection?: RowsSelection<R>;
  /**
   * Состояние выбора колонок таблицы.
   */
  columnsSelection?: {
    selected?: string[];
    onHighlightedChange?: (rows: string[]) => void;
  };
  /**
   * Включение возможности сортировки.
   */
  enableSorting?: boolean;
  /**
   * Включение возможности изменения размеров колонок.
   */
  enableColumnResizing?: boolean;
  /**
   * Стиль таблицы.
   */
  style?: TableStyle<R>;

  /**
   * Плотная (более узкая) компоновка таблицы
   */
  dense?: boolean;

  /**
   * Сообщение при отсутствии данных
   */
  noDataMessage?: string | JSX.Element;

  /**
   * Скрыть блок с сообщением об отсутствии данных
   */
  hideNoDataMessage?: boolean;

  /**
   * Скрыть строку с заголовками
   */
  hideHeadComponent?: boolean;
  /**
   * Зафиксировать заголовок таблицы
   */
  fixHeader?: boolean;
  /**
   * Массив id строк, которые находятся в режиме редактирования
   */
  editingRowIds?: RowID[];
  /**
   * Функция, вызывающаяся при изменении значений в ячейках
   */
  onRowChangesChange?: (data: RowChanges) => void;
  /**
   * Изменения в строках
   */
  rowChanges?: RowChanges;
  /**
   * Обработчик, вызываемый после нажати Ctrl+V в редактируемой ячейке
   */
  onPaste?: (value: string[], column: TableColumn<R>, rowId: RowID) => void;

  /**
   * A function used to get a unique row identifier.
   * Функция, которая возвращает ID ряда
   */
  getRowId?: (row: R) => RowID;

  /**
   * Виртуальная таблица
   */
  virtual?: boolean;

  /**
   * Прокрутка до ряда с указанным ID. Работает только в виртуализированой таблице
   */
  rowIDtoScroll?: RowID;

  /**
   * Функция рендеринга раскрытия строки
   * @param row объект строки
   */
  renderExpandRow?: (row: R) => React.ReactElement;
  /**
   * Функция для определения, доступно ли раскрытие строки
   * @param row объект строки
   */
  canExpandRow?: ((row: R) => boolean) | boolean;
  /**
   * Функция для получения вложенных строк
   * @param currentRow - строка, которая отрисовывается
   * @param rootRows - корневые строки
   */
  getChildRows?: (currentRow: R | null, rootRows: Array<R>) => Array<R> | null;
}
export interface Column {
    /*** Specifies the column name or the name of a row field whose value the column displays.
      * If the column name does not match any field name, specify the `getCellValue` function.
      **/
    name: string;
    /** Specifies the column title. */
    title?: string;
    /** Specifies the function used to get the column value for a given row. */
    getCellValue?: GetCellValueFn;
}
export declare type Row = any;
export declare type RowId = number | string;
export declare type GetCellValueFn = (row: any, columnName: string) => any;

/**
 * Колонка таблицы.
 */
export interface TableColumn<R> extends Column {
  /**
   * Ширина, если number - в пикселях, если string - css-свойство (например: '100px', '20%', 'auto').
   */
  width?: number | string;
  /**
   * Выравнивание текста.
   */
  align?: 'left' | 'right' | 'center';
  /**
   * Включение переноса по словам.
   */
  wordWrapEnabled?: boolean;
  /**
   * Стиль колонки.
   */
  style?: ColumnStyle<R>;
  /**
   * Функция для определения иконки по ряду.
   */
  getIcon?: (row: R) => React.ReactNode | undefined;
  /**
   * Тип колонки.
   */
  type?: 'checkbox' | 'button' | 'input';
  /**
   * Тип данных
   */
  dataType?: 'numeric' | 'string' | 'boolean' | 'date' | 'datetime' | 'custom';
  /**
   * Функция для определения рисуемого элемента в ячейке, если необходимо нарисовать что-то больше, чем просто текст или элемент, доступный через type.
   */
  render?: (row: R, id?: RowID) => React.ReactNode | undefined;
  formName?: string;
  /**
   * Вызывается каждый раз, когда введенное значение не прошло валидацию в validationSchema
   */
  onDetectError?: (f?: {[k: string]: string}) => void;
  /**
   * Флаг редактируемости текущего столбца
   */
  editable?: boolean;
  /**
   * Флаг отображения текущего столбца
   */
  visible?: boolean;
  /**
   * Флаг закрепления столба слева
   */
  pinned?: boolean;
  /**
   * Флаг закрепления столба справа
   */
  rightPinned?: boolean;
  /**
   * Флаг для отображения нативной браузерной подсказки <td title='It's native hint ...></td>
   */
  hideNativeTitle?: boolean;
}

/**
 * Свойства стиля элемента.
 */
export interface StyleProps {
  /**
   * Стиль.
   */
  style?: CSSProperties;
  /**
   * Имя класса.
   */
  className?: string;
}

/**
 * Свойства стиля элемента, относящегося к какому-то ряду таблицы.
 */
export interface RowStyleProps<R> {
  /**
   * Стиль.
   */
  style?: ((row: R) => CSSProperties);
  /**
   * Имя класса.
   */
  className?: string | ((row: R) => string | undefined);
}

/**
 * Стиль таблицы.
 */
export interface TableStyle<R> {
  /**
   * Стиль контейнера таблицы
   */
  container?: StyleProps;
  /**
   * Стиль скроллбара
   */
  scrollbar?: StyleProps;
  /**
   * Стиль корневого div-элемента.
   */
  root?: StyleProps;
  /**
   * Стиль корневого div-элемента.
   */
  virtualRoot?: StyleProps;
  /**
   * Стиль table-элемента.
   */
  table?: StyleProps;
  /**
   * Стиль thead-элемента.
   */
  header?: StyleProps;
  /**
   * Стиль tbody-элемента.
   */
  body?: StyleProps;
  /**
   * Стиль tr-элемента заголовков.
   */
  headerRow?: StyleProps;
  /**
   * Стиль tr-элемента рядов.
   */
  row?: RowStyleProps<R>;
  /**
   * Стиль tr-элемента выбранных рядов.
   */
  selectedRow?: RowStyleProps<R>;

  /**
   * Cтиль для нижнего закрепленного ряда
   */
  summaryRow?: RowStyleProps<R>;
}

/**
 * Стиль колонки.
 */
export interface ColumnStyle<R> {
  /**
   * Стиль th-элемента заголовка.
   */
  header?: StyleProps;
  /**
   * Стиль td-элемента колонки.
   */
  cell?: RowStyleProps<R>;
}

export interface RowsSelection<R> {
  /**
   * Включение выбора рядов подсвечиванием.
   */
  highlightEnabled?: boolean;
  /**
   * Включение исключающего подсвечивания.
   */
  singleHighlight?: boolean;
  /**
   * Фукнция выбора строк для редактирования
   */
  onEditableRowIdChange?: (id: RowID[]) => void;
  /**
   * Подсвеченные ряды.
   */
  highlighted?: RowID[];
  /**
   * Функция, вызываемая при изменении подсвеченных рядов.
   */
  onHighlightedChange?: (selection: RowID[]) => void;
  /**
   * Включение выбора рядов чекбоксом.
   */
  checkEnabled?: boolean;
  /**
   * Включение возможности выбора конкретного ряда.
   */
  rowCheckEnabled?: (row: R) => boolean;
  /**
   * Включение возможности изменения состояния выбора конкретного ряда.
   */
  rowCheckReadonly?: (row: R) => boolean;
  /**
   * Включение исключающего выбора чекбоксом.
   */
  singleCheck?: boolean;
  /**
   * Выбранные чекбоксом ряды.
   */
  checked?: R[];
  /**
   * Функция, вызываемая при изменении выбранных чекбоксом рядов.
   */
  onCheckedChange?: (checked: R[]) => void;
  /**
   * Ширина колонки чекбоксов для выбора рядов.
   */
  checkColumnWidth?: number;
}

