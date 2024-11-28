import { useState, useEffect } from 'react';

/**
 * Date Utilities Hook
 * Provides utility functions for generating days, hours, and years, along with time formatting.
 */
export const useDateUtilities = () => {
  /**
   * Generate a list of dates starting from a given start date.
   * @param daysToGenerate - Number of days to generate (default: 10).
   * @param startDate - Starting date as a `Date` object (default: yesterday).
   * @returns An array of objects, each containing a formatted date (`YYYY-MM-DD`) and its day name.
   */
  const getCalendarDays = (
    daysToGenerate: number = 10,
    startDate: Date = new Date()
  ): { date: string; day: string }[] => {
    const days = [];
    const baseDate = new Date(startDate);
    baseDate.setDate(baseDate.getDate() - 1); // Default to yesterday

    for (let i = 0; i < daysToGenerate; i++) {
      const currentDate = new Date(baseDate);
      currentDate.setDate(baseDate.getDate() + i);
      const formattedDate = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
      const day = currentDate.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., Mon, Tue
      days.push({ date: formattedDate, day });
    }

    return days;
  };

  /**
   * Generate a list of hours for a day.
   * @param startHour - Starting hour (default: 0, i.e., midnight).
   * @param endHour - Ending hour (default: 23, i.e., 11 PM).
   * @param interval - Interval between hours in minutes (default: 60).
   * @returns An array of strings representing times in the format `HH:MM`.
   */
  const getHoursRange = (
    startHour: number = 0,
    endHour: number = 23,
    interval: number = 60
  ): string[] => {
    const hours = [];
    for (let i = startHour; i <= endHour; i++) {
      for (let j = 0; j < 60; j += interval) {
        const hour = i.toString().padStart(2, '0'); // Ensure 2-digit hours
        const minute = j.toString().padStart(2, '0'); // Ensure 2-digit minutes
        hours.push(`${hour}:${minute}`);
      }
    }
    return hours;
  };

  /**
   * Generate a range of years.
   * @param startYear - Starting year (default: current year).
   * @param endYear - Ending year (default: current year + 10).
   * @returns An array of numbers representing the years in the range.
   */
  const getYearRange = (
    startYear: number = new Date().getFullYear(),
    endYear: number = new Date().getFullYear() + 10
  ): number[] => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  /**
   * Format a given date into a human-readable string.
   * @param date - The `Date` object to format.
   * @param options - Formatting options for `Intl.DateTimeFormat`.
   * @returns A formatted date string (default: full weekday, month, day, year).
   */
  const formatDate = (
    date: Date,
    options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  ): string => {
    return date.toLocaleDateString('en-US', options);
  };

  /**
   * Get the current time in `HH:MM:SS` format.
   * @returns A string representing the current time.
   */
  const getCurrentTime = (): string => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  /**
   * Timer Hook
   * Tracks elapsed seconds, starting from an initial value.
   * @param initialSeconds - Starting value for the timer (default: 0).
   * @returns The number of elapsed seconds.
   */
  const useTimer = (initialSeconds: number = 0) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return seconds;
  };

  return {
    getCalendarDays,
    getHoursRange,
    getYearRange,
    formatDate,
    getCurrentTime,
    useTimer,
  };
};

export default useDateUtilities;
