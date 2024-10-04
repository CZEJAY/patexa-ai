"use server";

import prisma from "@/lib/prisma";

export const createWaitList = async (email: string) => {
  try {
    let err;
    if (!email) {
      err = "Email is required";
      return {
        error: err,
      };
    }
    const existing = await prisma.waitingList.findFirst({
      where: {
        email,
      },
    });
    if (existing) {
      err = "Email already exists in the waitlist";
      return {
        error: err,
      };
    }
    await prisma.waitingList.create({
      data: {
        email,
      },
    });
    return {
      message: "Waitlist entry created successfully",
    };
  } catch (error: any) {
    console.error(error);
    return {
      error: "An error occurred while creating the waitlist entry",
    };
  }
};
