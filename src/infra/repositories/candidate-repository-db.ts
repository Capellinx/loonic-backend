import { prisma } from "../../../prisma/db";
import { Candidate } from "../../domain/entity/candidate";
import { CandidateRepository } from "../../domain/repositories/candidate-repository";
import { CreateCandidateDTO } from "../../use-cases/candidate/create-candidate/create-candidate-dto";
import { GetAllCandidatesDTO } from "../../use-cases/candidate/get-all-candidates/get-all-candidates-dto";

export class CandidateRepositoryDB implements CandidateRepository {
   async findByEmail(email: string): Promise<Candidate | null> {
      const candidate = await prisma.candidate.findUnique({
         where: {
            email,
         },
         include: {
            skills: true
         }
      })

      if (!candidate) return null

      return candidate

   }

   async findById(id: string): Promise<Candidate | null> {
      return await prisma.candidate.findUnique({
         where: {
            id
         },
         include: {
            skills: {
               select: {
                  name: true
               }
            }
         }
      })
   }

   async delete(id: string): Promise<void> {
      console.log(id);
      await prisma.candidate.delete({
         where: {
            id
         }
      })
   }

   async create(payload: CreateCandidateDTO): Promise<void> {
      await prisma.candidate.create({
         data: {
            ...payload,
            skills: {
               create: payload.skills
            }
         }
      })


      return
   }

   async getAllCandidates({ name, skills, status, page = 1 }: GetAllCandidatesDTO): Promise<[Candidate[], number]> {

      const candidates = prisma.candidate.findMany({
         where: {
            name: {
               contains: name
            },
            skills: {
               some: {
                  name: {
                     in: skills
                  }
               }
            },
            status: {
               in: status as any
            }
         },
         include: {
            skills: true
         },
         take: 10,
         skip: (page - 1) * 10,
      });

      const quantity_results = prisma.candidate.count({
         where: {
            name: {
               contains: name
            },
            skills: {
               some: {
                  name: {
                     in: skills
                  }
               }
            },
            status: {
               in: status as any
            }
         }
      });

      return await Promise.all([candidates, quantity_results]);
   }

   async getOneCandidate(id: string): Promise<Candidate | null> {
      return await prisma.candidate.findUnique({
         where: {
            id
         },
         include: {
            skills: {
               select: {
                  name: true
               }
            }
         }
      })
   }

   async update(id: string, payload: CreateCandidateDTO): Promise<void> {
      await prisma.candidate.update({
         where: { id },
         data: {
            email: payload.email,
            name: payload.name,
            phone: payload.phone,
            education: payload.education,
            experience: payload.experience,
            status: payload.status,
            skills: {
               updateMany: payload.skills.map(skill => ({
                  where: {
                     candidateId: id,
                     name: skill.name.toLowerCase()
                  },
                  data: {
                     name: skill.name.toLowerCase() 
                  }
               }))
            }
         }
      });

      return;
   }


}