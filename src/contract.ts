import { initContract } from '@ts-rest/core'
// All contracts are imported here:
import { transcribeContract } from '@/routes/v1/transcribe/contract'
import { pingContract } from './routes/v1/ping/contract'

const c = initContract()

export const contract = c.router({
  ...transcribeContract,
  ...pingContract
})

/*
// NOTE: The following code is an alternative approach to grouping multiple contracts into one.
// However, issue #521 does not explicitly document this approach as a solution.
// Reference: https://github.com/ts-rest/ts-rest/issues/521

export const contract = {
  ...transcribeContract,
  ...pingContract
}
*/
