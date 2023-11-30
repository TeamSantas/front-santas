import { BoardForm, ReportData } from "../../util/type";
import TownService from "../TownService";

/**
 * 게시글 좋아요
 */
export async function putBoardLikeAndUnlike(boardId) {
  const config = { boardId };
  try {
    const res = await TownService.putBoardLikeAndUnlike(config);
    return res.data.status === 200;
  } catch (e) {
    console.log(e);
    return false;
  }
}

/**
 * 내 게시글 조회
 */
export async function getMyBoard(boardId) {
  const config = { boardId };
  try {
    const res = await TownService.getMyBoard(config);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 내 게시글 조회 (서버)
 */
export async function getServerMyBoard(boardId, token) {
  const config = { boardId };
  try {
    const res = await TownService.getServerMyBoard(config, token);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}
/**
 * 비회원 게시글 조회
 */
export async function getBoard(boardId) {
  const config = { boardId };
  try {
    const res = await TownService.getBoard(config);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 회원 게시글 조회(서버)
 */
export async function getAuthBoard(boardId, token) {
  const config = { boardId };
  try {
    const res = await TownService.getAuthBoard(config, token);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 게시글 작성
 */
export async function postBoard(formData: BoardForm) {
  try {
    const res = await TownService.postBoard(formData);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 인기 게시글 조회
 */
export async function getBoardPopular() {
  try {
    const res = await TownService.getBoardPopular();
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 인기 게시글 조회 (서버)
 */
export async function getAuthBoardPopular(token) {
  try {
    const res = await TownService.getAuthBoardPopular(token);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 게시글 신고
 */
export async function report(ReportData: ReportData) {
  try {
    const res = await TownService.postBoardReport(ReportData);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

/**
 * 게시글 삭제
 */
export async function deleteContent(boardId) {
  const config = { boardId };
  try {
    const res = await TownService.postBoardDelete(config);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
