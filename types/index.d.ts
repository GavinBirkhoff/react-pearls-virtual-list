import * as React from "react";
import * as PropTypes from "prop-types";
import ListManager, { ItemSize } from "./ListManager";
import { ALIGNMENT, DIRECTION, SCROLL_CHANGE_REASON } from "./constants";
export { DIRECTION as ScrollDirection } from "./constants";
export declare type ItemPosition = "absolute" | "sticky";
export interface ItemStyle {
    position: ItemPosition;
    top?: number;
    left: number;
    width: string | number;
    height?: number;
    marginTop?: number;
    marginLeft?: number;
    marginRight?: number;
    marginBottom?: number;
    zIndex?: number;
}
export interface ItemInfo {
    index: number;
    style: ItemStyle;
}
export interface RenderedRows {
    startIndex: number;
    stopIndex: number;
}
export interface Props {
    className?: string;
    estimatedItemSize?: number;
    height: number | string;
    itemCount: number;
    itemSize: ItemSize;
    overscanCount?: number;
    scrollOffset?: number;
    scrollToIndex?: number;
    scrollToAlignment?: ALIGNMENT;
    scrollDirection?: DIRECTION;
    stickyIndices?: number[];
    style?: React.CSSProperties;
    width?: number | string;
    onItemsRendered?({ startIndex, stopIndex }: RenderedRows): void;
    onScroll?(offset: number, event: UIEvent): void;
    onScrollEnd?(offset: number, event: UIEvent, index?: number): void;
    renderItem(itemInfo: ItemInfo): React.ReactNode;
}
export interface State {
    offset: number;
    scrollChangeReason: SCROLL_CHANGE_REASON;
}
export default class VirtualList extends React.PureComponent<Props, State> {
    static defaultProps: {
        overscanCount: number;
        scrollDirection: DIRECTION;
        width: string;
    };
    static propTypes: {
        estimatedItemSize: PropTypes.Requireable<number>;
        height: PropTypes.Validator<string | number>;
        itemCount: PropTypes.Validator<number>;
        itemSize: PropTypes.Validator<number | any[] | ((...args: any[]) => any)>;
        onScroll: PropTypes.Requireable<(...args: any[]) => any>;
        onScrollEnd: PropTypes.Requireable<(...args: any[]) => any>;
        onItemsRendered: PropTypes.Requireable<(...args: any[]) => any>;
        overscanCount: PropTypes.Requireable<number>;
        renderItem: PropTypes.Validator<(...args: any[]) => any>;
        scrollOffset: PropTypes.Requireable<number>;
        scrollToIndex: PropTypes.Requireable<number>;
        scrollToAlignment: PropTypes.Requireable<ALIGNMENT>;
        scrollDirection: PropTypes.Requireable<DIRECTION>;
        stickyIndices: PropTypes.Requireable<(number | null | undefined)[]>;
        style: PropTypes.Requireable<object>;
        width: PropTypes.Requireable<string | number>;
    };
    itemSizeGetter: (itemSize: Props["itemSize"]) => (index: any) => any;
    listManager: ListManager;
    readonly state: State;
    private rootNode;
    private styleCache;
    private timer;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    componentDidUpdate(_: Props, prevState: State): void;
    componentWillUnmount(): void;
    scrollTo(value: number): void;
    getOffsetForIndex(index: number, scrollToAlignment?: ALIGNMENT | undefined, itemCount?: number): number;
    recomputeSizes(startIndex?: number): void;
    render(): JSX.Element;
    private getRef;
    private handleScroll;
    private handleScrollEnd;
    private getNodeOffset;
    private getEstimatedItemSize;
    private getSize;
    private getStyle;
}
