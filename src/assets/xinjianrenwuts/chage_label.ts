export function getSelectedLabel(value: string): string {
    switch (value) {
        case '按用户爬取':
            return '爬取用户名称';
        case '按关键词爬取':
            return '爬取关键词';
        case '按话题爬取':
            return '爬取话题';
        default:
            return '';
    }
}
