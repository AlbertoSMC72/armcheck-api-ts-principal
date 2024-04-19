import { AnalisisRepository } from "../domain/repository/analysisRepository";
import { AnalisisResponse } from "../domain/entities/analysisResponse";

export class GetAnalisisService {
    constructor(private readonly analisisRepository: AnalisisRepository) { }
    async run(): Promise<AnalisisResponse> {
        try {
            const response = await this.analisisRepository.getAnalisis();
                return response;
        } catch (err: any){
            console.log(err);
            throw new Error(err);
        }
    }
}
