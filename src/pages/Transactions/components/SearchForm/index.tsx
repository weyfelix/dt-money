import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";

const searchFormSchema = z.object({
    query: z.string(),
})

type SeachFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm () {

    const {feachTransactions} = useContext(TransactionsContext)

    const {
        register,
        handleSubmit, 
        formState: {isSubmitting} 
    } = useForm<SeachFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchTransactions(data: SeachFormInputs) {
        await feachTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Busque por transações" 
                {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}