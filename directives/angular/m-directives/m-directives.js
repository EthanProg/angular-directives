/**
 * web 组件公用指令模块
 * Created by Ethan on 2015/5/28.
 */
angular.module('mobileDirceticves', ['m_config'])
    // text area 文本弹出框 指令
    .directive('mTextArea', function (relative_path) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                dataset: '=',
                cancel: '&',
                confirm: '&'
            },
            templateUrl: relative_path + 'm-template/m-text-area.html',
            link: function (scope, elem, attrs) {
                if (!scope.dataset.show) {
                    scope.dataset['show'] = false;
                }
            }
        };
    });
