import React from 'react';

export default class PieChart extends React.Component<any, any> {
    private itemLegend: IgrItemLegend
    private itemLegendRef(r: IgrItemLegend) {
        this.itemLegend = r;
        this.setState({});
    }
    private chart: IgrPieChart
    private chartRef(r: IgrPieChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.itemLegendRef = this.itemLegendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            
            <div className="legend-title">
                Global Electricity Demand by Energy Use
            </div>
            <div className="legend">
                <IgrItemLegend
                    orientation="Horizontal"
                    ref={this.itemLegendRef}>
                </IgrItemLegend>
            </div>
            <div className="container fill">
                <IgrPieChart
                    dataSource={this.data}
                    valueMemberPath="marketShare"
                    labelMemberPath="summary"
                    legendLabelMemberPath="summary"
                    labelsPosition="OutsideEnd"
                    radiusFactor="0.7"
                    legend={this.itemLegend}
                    labelExtent="30"
                    outlines="white"
                    ref={this.chartRef}>
                </IgrPieChart>
            </div>
        </div>
        );
    }
    
}