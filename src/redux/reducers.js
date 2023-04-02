import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    jd: {
        job_title: "",
        company_name: "",
        industry: "",
        location: "",
        remote_type: "",
        experience: {
            max: "",
            min: "",
        },
        salary: {
            max: "",
            min: "",
        },
        total_employee: "",
        apply_type: ""
    }
}

export const formReducer = createReducer(initialState, {
    setJt: (state, action) => {
        state.jd.job_title = action.payload
    },
    setCn: (state, action) => {
        state.jd.company_name = action.payload
    },
    setInd: (state, action) => {
        state.jd.industry = action.payload
    },
    setLoc: (state, action) => {
        state.jd.location = action.payload
    },
    setRt: (state, action) => {
        state.jd.remote_type = action.payload
    },
    setExpMax: (state, action) => {
        state.jd.experience.max = action.payload
    },
    setExpMin: (state, action) => {
        state.jd.experience.min = action.payload
    },
    setSalaryMax: (state, action) => {
        state.jd.salary.max = action.payload
    },
    setSalaryMin: (state, action) => {
        state.jd.salary.min = action.payload
    },
    setTe: (state, action) => {
        state.jd.total_employee = action.payload
    },
    setAt: (state, action) => {
        state.jd.apply_type = action.payload
    }
})