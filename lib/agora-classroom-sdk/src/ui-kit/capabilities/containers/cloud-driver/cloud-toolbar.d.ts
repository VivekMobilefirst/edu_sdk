export declare type CloudToolbarProps = {
    /**
     * 文件数量
     */
    fileCounts: number;
    /**
     * 搜索关键字
     */
    keyword: string;
    /**
     * 关键字搜索变化
     */
    onKeywordChange: (evt: any) => void;
    showRefresh?: boolean;
    /**
     * 刷新方法
     */
    onRefresh?: () => void;
};
export default function CloudToolbar({ fileCounts, keyword, onKeywordChange, showRefresh, onRefresh, }: CloudToolbarProps): JSX.Element;
