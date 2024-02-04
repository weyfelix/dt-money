import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./style";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {

    const sumary = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b37a"/>
                </header>

                <strong>{priceFormatter.format(sumary.income)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68"/>
                </header>

                <strong>{priceFormatter.format(sumary.outcome)}</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff"/>
                </header>

                <strong>{priceFormatter.format(sumary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}